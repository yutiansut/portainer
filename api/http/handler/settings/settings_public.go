package settings

import (
	"net/http"

	httperror "github.com/portainer/libhttp/error"
	"github.com/portainer/libhttp/response"
	"github.com/portainer/portainer"
)

type publicSettingsResponse struct {
	LogoURL                            string                         `json:"LogoURL"`
	AuthenticationMethod               portainer.AuthenticationMethod `json:"AuthenticationMethod"`
	AllowBindMountsForRegularUsers     bool                           `json:"AllowBindMountsForRegularUsers"`
	AllowPrivilegedModeForRegularUsers bool                           `json:"AllowPrivilegedModeForRegularUsers"`
	EnableHostManagementFeatures       bool                           `json:"EnableHostManagementFeatures"`
	ExternalTemplates                  bool                           `json:"ExternalTemplates"`
}

// GET request on /api/settings/public
func (handler *Handler) settingsPublic(w http.ResponseWriter, r *http.Request) *httperror.HandlerError {
	settings, err := handler.SettingsService.Settings()
	if err != nil {
		return &httperror.HandlerError{http.StatusInternalServerError, "Unable to retrieve the settings from the database", err}
	}

	publicSettings := &publicSettingsResponse{
		LogoURL:                            settings.LogoURL,
		AuthenticationMethod:               settings.AuthenticationMethod,
		AllowBindMountsForRegularUsers:     settings.AllowBindMountsForRegularUsers,
		AllowPrivilegedModeForRegularUsers: settings.AllowPrivilegedModeForRegularUsers,
		EnableHostManagementFeatures:       settings.EnableHostManagementFeatures,
		ExternalTemplates:                  false,
	}

	if settings.TemplatesURL != "" {
		publicSettings.ExternalTemplates = true
	}

	return response.JSON(w, publicSettings)
}
