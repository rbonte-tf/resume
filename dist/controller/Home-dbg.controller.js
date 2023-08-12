sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("cv.controller.Home", {
            onInit: function () {
                // Mock Data Model
                var oData = {
                    workExperience: [
                        { company: "MHP - A Porche Company", role: "Junior Consultant", duration: "2022 - present" }
                    ],
                    skills: [
                        { name: "JavaScript", level: "Expert" },
                        { name: "SAPUI5", level: "Intermediate" }
                    ],
                    education: [
                        { institution: "UTCN", degree: "Bachelor's in Automation", year: "2019-2023" }
                    ],
                    projects: [
                        {
                        name: "Project A",
                        description: "A great project about XYZ.",
                        technologies: "HTML, CSS, JavaScript",
                        link: "https://github.com/username/projectA"
                    }, {
                        name: "Project B",
                        description: "A fascinating project focusing on ABC.",
                        technologies: "Python, Django",
                        link: "https://github.com/username/projectB"
                    }]
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            }
        });
    });
