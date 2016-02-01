Meteor.methods({



    secureCreateUser: function(user) {
        console.log(user);
        if (user.college == 'CAS') {

            var user_id = Accounts.createUser({
                username: user.username,
                password: user.password,
                profile: {
                    lastName: user.lastName,
                    firstName: user.firstName,
                    middleName: user.middleName,
                    college: user.college,
                    course: user.course,
                    year: user.year,
                    semester: user.semester,
                    SY: user.SY,
                    organizations: [{
                        filter: "BTC"
                    }, {
                        filter: "ComSoc"
                    }, {
                        filter: "EngLang"
                    }, {
                        filter: "NatSci"
                    }],
                    BTCstatus: "uncleared",
                    BTCofficer: "",
                    ComSocstatus: "uncleared",
                    ComSocofficer: "",
                    EngLangstatus: "uncleared",
                    EngLangofficer: "",
                    NatScistatus: "uncleared",
                    NatSciofficer: "",
                    SSDstatus: "uncleared",
                    SSDofficer: "",
                    CASSBOTREASstatus: "uncleared",
                    CASSBOTREASofficer: "",
                    CASSBOGOVstatus: "uncleared",
                    CASSBOGOVofficer: "",
                    CASGUIDANCEstatus: "uncleared",
                    CASGUIDANCEofficer: "",
                    CASSBOADVISERstatus: "uncleared",
                    CASSBOADVISERofficer: "",
                    CHAIRPERSONstatus: "uncleared",
                    CHAIRPERSONofficer: "",
                    CASDEANstatus: "uncleared",
                    CASDEANofficer: ""
                }

            });



            if (user.roles.length > 0) {
                // Need _id of existing user record so this call must come 
                // after `Accounts.createUser` or `Accounts.onCreate`
                Roles.addUsersToRoles(user_id, user.roles, 'clearance');
            }

        }

        if (user.college == 'COB') {

            var user_id = Accounts.createUser({
                username: user.username,
                password: user.password,
                profile: {
                    lastName: user.lastName,
                    firstName: user.firstName,
                    middleName: user.middleName,
                    college: user.college,
                    course: user.course,
                    year: user.year,
                    semester: user.semester,
                    SY: user.SY,
                    organizations: [{
                        filter: "BTC"
                    }, {
                        filter: "ComSoc"
                    }, {
                        filter: "EngLang"
                    }, {
                        filter: "NatSci"
                    }],
                    SJHstatus: "uncleared",
                    SJHofficer: "",
                    BTCstatus: "uncleared",
                    BTCofficer: "",
                    JPCCIstatus: "uncleared",
                    JPCCIofficer: "",
                    ComSocstatus: "uncleared",
                    ComSocofficer: "",
                    JPIAstatus: "uncleared",
                    JPIAofficer: "",
                    EngLangstatus: "uncleared",
                    EngLangCofficer: "",
                    PASstatus: "uncleared",
                    PASofficer: "",
                    NatScistatus: "uncleared",
                    NatSciofficer: "",
                    JFMCstatus: "uncleared",
                    JFMCofficer: "",
                    COBGUIDANCEstatus: "uncleared",
                    COBGUIDANCEofficer: "",
                    COBSBOADVISERstatus: "uncleared",
                    COBSBOADVISERofficer: "",
                    COBSBOstatus: "uncleared",
                    COBSBOofficer: ""
                }

            });



            if (user.roles.length > 0) {
                // Need _id of existing user record so this call must come 
                // after `Accounts.createUser` or `Accounts.onCreate`
                Roles.addUsersToRoles(user_id, user.roles, 'clearance');
            }

        }

        if (user.college == 'CCDT') {

            var user_id = Accounts.createUser({
                username: user.username,
                password: user.password,
                profile: {
                    lastName: user.lastName,
                    firstName: user.firstName,
                    middleName: user.middleName,
                    college: user.college,
                    course: user.course,
                    year: user.year,
                    semester: user.semester,
                    SY: user.SY,
                    SocPresstatus: "uncleared",
                    SocPresofficer: "",
                    CCEITSBOTREASstatus: "uncleared",
                    CCEITSBOTREASofficer: "",
                    CCEITSBOGOVstatus: "uncleared",
                    CCEITSBOGOVofficer: "",
                    CCEITCHAIRPERSONstatus: "uncleared",
                    CCEITCHAIRPERSONofficer: "",
                    CCEITDEANstatus: "uncleared",
                    CCEITDEANofficer: ""
                }

            });



            if (user.roles.length > 0) {
                // Need _id of existing user record so this call must come 
                // after `Accounts.createUser` or `Accounts.onCreate`
                Roles.addUsersToRoles(user_id, user.roles, 'clearance');
            }

        }

        if (user.college == 'CTE') {

            var user_id = Accounts.createUser({
                username: user.username,
                password: user.password,
                profile: {
                    lastName: user.lastName,
                    firstName: user.firstName,
                    middleName: user.middleName,
                    college: user.college,
                    course: user.course,
                    year: user.year,
                    semester: user.semester,
                    SY: user.SY,
                    organizations: [{
                        filter: "BTC"
                    }, {
                        filter: "ComSoc"
                    }, {
                        filter: "EngLang"
                    }, {
                        filter: "NatSci"
                    }],
                    BTCstatus: "uncleared",
                    BTCofficer: "",
                    ComSocstatus: "uncleared",
                    ComSocofficer: "",
                    EngLangstatus: "uncleared",
                    EngLangofficer: "",
                    NatScistatus: "uncleared",
                    NatSciofficer: "",
                    PECIRCLEstatus: "uncleared",
                    PECIRCLEofficer: "",
                    MLTREASstatus: "uncleared",
                    MLTREASCofficer: "",
                    CTESBOstatus: "uncleared",
                    CTESBOofficer: "",
                    MLADVISERstatus: "uncleared",
                    MLADVISERofficer: "",
                    CTESBOADVISERstatus: "uncleared",
                    CTESBOADVISERofficer: "",
                    SSTGTstatus: "uncleared",
                    SSTGTofficer: "",
                    SSLPRINCIPALstatus: "uncleared",
                    SSLPRINCIPALofficer: "",
                    ESLPRINCIPALstatus: "uncleared",
                    ESLPRINCIPALofficer: "",
                    CTECHAIRPERSONstatus: "uncleared",
                    CTECHAIRPERSONofficer: "",
                    CTEDEANstatus: "uncleared",
                    CTEDEANofficer: ""
                }

            });



            if (user.roles.length > 0) {
                // Need _id of existing user record so this call must come 
                // after `Accounts.createUser` or `Accounts.onCreate`
                Roles.addUsersToRoles(user_id, user.roles, 'clearance');
            }

        }

        if (user.college == 'CON') {

            var user_id = Accounts.createUser({
                username: user.username,
                password: user.password,
                profile: {
                    lastName: user.lastName,
                    firstName: user.firstName,
                    middleName: user.middleName,
                    college: user.college,
                    course: user.course,
                    year: user.year,
                    semester: user.semester,
                    SY: user.SY,
                    CONSBOTREASstatus: "uncleared",
                    CONSBOTREASofficer: "",
                    CONSBOGOVstatus: "uncleared",
                    CONSBOGOVofficer: "",
                    CONSBOADVISERstatus: "uncleared",
                    CONSBOADVISERofficer: "",
                    YLCORDINATORstatus: "uncleared",
                    YLCORDINATORofficer: "",
                    CONDEANstatus: "uncleared",
                    CONDEANofficer: ""
                }

            });



            if (user.roles.length > 0) {
                // Need _id of existing user record so this call must come 
                // after `Accounts.createUser` or `Accounts.onCreate`
                Roles.addUsersToRoles(user_id, user.roles, 'clearance');
            }

        }

    },

    addMessage: function(message_data) {
        if (this.userId) {
            check(message_data, Object);
            message_data.createdAt = new Date();
            message_data.userid = this.userId
            StudentList.insert(message_data);
        }
    },


    // <<<===============CAS START=================>>>


    updateBTC: function(status_data) {

        if (this.userId) {

            if (status_data.profile.BTCstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.BTCofficer = Meteor.user().officer
                status_data.profile.BTCstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.BTCofficer = Meteor.user().officer
                status_data.profile.BTCstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateComSoc: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.ComSocstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.ComSocofficer = Meteor.user().officer
                status_data.profile.ComSocstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.ComSocofficer = Meteor.user().officer
                status_data.profile.ComSocstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateEngLang: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.EngLangstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.EngLangofficer = Meteor.user().officer
                status_data.profile.EngLangstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.EngLangofficer = Meteor.user().officer
                status_data.profile.EngLangstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateNatSci: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.NatScistatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.NatSciofficer = Meteor.user().officer
                status_data.profile.NatScistatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.NatSciofficer = Meteor.user().officer
                status_data.profile.NatScistatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateSSD: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.SSDstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SSDofficer = Meteor.user().officer
                status_data.profile.SSDstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SSDofficer = Meteor.user().officer
                status_data.profile.SSDstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCASSBOTREAS: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CASSBOTREASstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASSBOTREASofficer = Meteor.user().officer
                status_data.profile.CASSBOTREASstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASSBOTREASofficer = Meteor.user().officer
                status_data.profile.CASSBOTREASstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCASSBOGOV: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CASSBOGOVstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASSBOGOVofficer = Meteor.user().officer
                status_data.profile.CASSBOGOVstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASSBOGOVofficer = Meteor.user().officer
                status_data.profile.CASSBOGOVstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCASGUIDANCE: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CASGUIDANCEstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASGUIDANCEofficer = Meteor.user().officer
                status_data.profile.CASGUIDANCEstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASGUIDANCEofficer = Meteor.user().officer
                status_data.profile.CASGUIDANCEstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCASSBOADVISER: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CASSBOADVISERstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASSBOADVISERofficer = Meteor.user().officer
                status_data.profile.CASSBOADVISERstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASSBOADVISERofficer = Meteor.user().officer
                status_data.profile.CASSBOADVISERstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updatebtnCHAIRPERSON: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CHAIRPERSONstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CHAIRPERSONofficer = Meteor.user().officer
                status_data.profile.CHAIRPERSONstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CHAIRPERSONofficer = Meteor.user().officer
                status_data.profile.CHAIRPERSONstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCASDEAN: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CASDEANstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASDEANofficer = Meteor.user().officer
                status_data.profile.CASDEANstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CASDEANofficer = Meteor.user().officer
                status_data.profile.CASDEANstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },



    // <<<===============CAS END=================>>>


    // <<<===============COB START=================>>>

    updateSJH: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.SJHstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SJHofficer = Meteor.user().officer
                status_data.profile.SJHstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SJHofficer = Meteor.user().officer
                status_data.profile.SJHstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateJPCCI: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.JPCCIstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.JPCCIofficer = Meteor.user().officer
                status_data.profile.JPCCIstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.JPCCIofficer = Meteor.user().officer
                status_data.profile.JPCCIstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateJPIA: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.JPIAstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.JPIAofficer = Meteor.user().officer
                status_data.profile.JPIAstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.JPIAofficer = Meteor.user().officer
                status_data.profile.JPIAstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updatePAS: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.PASstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.PASofficer = Meteor.user().officer
                status_data.profile.PASstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.PASofficer = Meteor.user().officer
                status_data.profile.PASstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateJFMC: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.JFMCstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.JFMCofficer = Meteor.user().officer
                status_data.profile.JFMCstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.JFMCofficer = Meteor.user().officer
                status_data.profile.JFMCstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCOBGUIDANCE: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.COBGUIDANCEstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.COBGUIDANCEofficer = Meteor.user().officer
                status_data.profile.COBGUIDANCEstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.COBGUIDANCEofficer = Meteor.user().officer
                status_data.profile.COBGUIDANCEstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCOBSBOADVISER: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.COBSBOADVISERstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.COBSBOADVISERofficer = Meteor.user().officer
                status_data.profile.COBSBOADVISERstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.COBSBOADVISERofficer = Meteor.user().officer
                status_data.profile.COBSBOADVISERstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCOBSBO: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.COBSBOstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.COBSBOofficer = Meteor.user().officer
                status_data.profile.COBSBOstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.COBSBOofficer = Meteor.user().officer
                status_data.profile.COBSBOstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateSocPres: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.SocPresstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SocPresofficer = Meteor.user().officer
                status_data.profile.SocPresstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SocPresofficer = Meteor.user().officer
                status_data.profile.SocPresstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCCEITSBOTREAS: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CCEITSBOTREASstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITSBOTREASofficer = Meteor.user().officer
                status_data.profile.CCEITSBOTREASstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITSBOTREASofficer = Meteor.user().officer
                status_data.profile.CCEITSBOTREASstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCCEITSBOGOV: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CCEITSBOGOVstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITSBOGOVofficer = Meteor.user().officer
                status_data.profile.CCEITSBOGOVstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITSBOGOVofficer = Meteor.user().officer
                status_data.profile.CCEITSBOGOVstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCCEITCHAIRPERSON: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CCEITCHAIRPERSONstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITCHAIRPERSONofficer = Meteor.user().officer
                status_data.profile.CCEITCHAIRPERSONstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITCHAIRPERSONofficer = Meteor.user().officer
                status_data.profile.CCEITCHAIRPERSONstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCCEITDEAN: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CCEITDEANstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITDEANofficer = Meteor.user().officer
                status_data.profile.CCEITDEANstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CCEITDEANofficer = Meteor.user().officer
                status_data.profile.CCEITDEANstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updatePECIRCLE: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.PECIRCLEstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.PECIRCLEofficer = Meteor.user().officer
                status_data.profile.PECIRCLEstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.PECIRCLEofficer = Meteor.user().officer
                status_data.profile.PECIRCLEstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateMENTORSTREAS: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.MLTREASstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.MLTREASofficer = Meteor.user().officer
                status_data.profile.MLTREASstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.MLTREASofficer = Meteor.user().officer
                status_data.profile.MLTREASstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCTESBO: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CTESBOstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTESBOofficer = Meteor.user().officer
                status_data.profile.CTESBOstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTESBOofficer = Meteor.user().officer
                status_data.profile.CTESBOstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateMENTORSADVISER: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.MLADVISERstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.MLADVISERofficer = Meteor.user().officer
                status_data.profile.MLADVISERstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.MLADVISERofficer = Meteor.user().officer
                status_data.profile.MLADVISERstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCTESBOADVISER: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CTESBOADVISERstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTESBOADVISERofficer = Meteor.user().officer
                status_data.profile.CTESBOADVISERstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTESBOADVISERofficer = Meteor.user().officer
                status_data.profile.CTESBOADVISERstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateSST: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.SSTGTstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SSTGTofficer = Meteor.user().officer
                status_data.profile.SSTGTstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SSTGTofficer = Meteor.user().officer
                status_data.profile.SSTGTstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateSSLPRINCIPAL: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.SSLPRINCIPALstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SSLPRINCIPALofficer = Meteor.user().officer
                status_data.profile.SSLPRINCIPALstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.SSLPRINCIPALofficer = Meteor.user().officer
                status_data.profile.SSLPRINCIPALstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateESLPRINCIPAL: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.ESLPRINCIPALstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.ESLPRINCIPALofficer = Meteor.user().officer
                status_data.profile.ESLPRINCIPALstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.ESLPRINCIPALofficer = Meteor.user().officer
                status_data.profile.ESLPRINCIPALstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCTECHAIRPERSON: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CTECHAIRPERSONstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTECHAIRPERSONofficer = Meteor.user().officer
                status_data.profile.CTECHAIRPERSONstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTECHAIRPERSONofficer = Meteor.user().officer
                status_data.profile.CTECHAIRPERSONstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCTEDEAN: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CTEDEANstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTEDEANofficer = Meteor.user().officer
                status_data.profile.CTEDEANstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CTEDEANofficer = Meteor.user().officer
                status_data.profile.CTEDEANstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCONSBOTREAS: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CONSBOTREASstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONSBOTREASofficer = Meteor.user().officer
                status_data.profile.CONSBOTREASstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONSBOTREASofficer = Meteor.user().officer
                status_data.profile.CONSBOTREASstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCONSBOGOV: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CONSBOGOVstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONSBOGOVofficer = Meteor.user().officer
                status_data.profile.CONSBOGOVstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONSBOGOVofficer = Meteor.user().officer
                status_data.profile.CONSBOGOVstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateCONSBOADVISER: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CONSBOADVISERstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONSBOADVISERofficer = Meteor.user().officer
                status_data.profile.CONSBOADVISERstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONSBOADVISERofficer = Meteor.user().officer
                status_data.profile.CONSBOADVISERstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },
    updateYLCORDINATOR: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.YLCORDINATORstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.YLCORDINATORofficer = Meteor.user().officer
                status_data.profile.YLCORDINATORstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.YLCORDINATORofficer = Meteor.user().officer
                status_data.profile.YLCORDINATORstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },

    updateCONDEAN: function(status_data) {

        console.log(status_data);

        if (this.userId) {

            if (status_data.profile.CONDEANstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONDEANofficer = Meteor.user().officer
                status_data.profile.CONDEANstatus = "uncleared"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.profile.CONDEANofficer = Meteor.user().officer
                status_data.profile.CONDEANstatus = "checked"
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }
        }
    },



    // <<<===============COB END=================>>>

    updateSSC: function(status_data) {

        if (this.userId) {

            if (status_data.profile.SSCstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.userid = this.userId
                status_data.profile.SSCofficer = Meteor.user().officer
                    // console.log(Meteor.user().officer);
                status_data.profile.SSCstatus = "uncleared"
                    // status_data.status = cleared
                    /*Meteor.users.update(status_data._id,status_data);
                    Players.update({score: {$gt: 10}},{$addToSet: {badges: "Winner"}},{multi: true});*/
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data.profile, Object);
                // status_data.createdAt = new Date();
                // status_data.userid = this.id
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.userid = this.userId
                console.log(Meteor.user().officer);
                status_data.profile.SSCofficer = Meteor.user().officer
                status_data.profile.SSCstatus = "checked"
                    // status_data.status = cleared
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }

        }



    },

    updateCOLLEGIANER: function(status_data) {
        if (this.userId) {

            if (status_data.profile.COLLEGIANERstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.userid = this.userId
                status_data.profile.COLLEGIANERofficer = Meteor.user().officer
                    // status_data.profile.userid = this.userId
                status_data.profile.COLLEGIANERstatus = "uncleared"
                    // status_data.status = cleared
                    /*Meteor.users.update(status_data._id,status_data);
                    Players.update({score: {$gt: 10}},{$addToSet: {badges: "Winner"}},{multi: true});*/
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data.profile, Object);
                // status_data.createdAt = new Date();
                // status_data.userid = this.id
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.userid = this.userId
                status_data.profile.COLLEGIANERofficer = Meteor.user().officer
                status_data.profile.COLLEGIANERstatus = "checked"
                    // status_data.status = cleared
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }

        }
    },


    updateSBO: function(status_data) {
        if (this.userId) {

            if (status_data.profile.SBOstatus == "checked") {
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.userid = this.userId
                status_data.profile.SBOofficer = Meteor.user().officer
                    // status_data.profile.userid = this.userId
                status_data.profile.SBOstatus = "uncleared"
                    // status_data.status = cleared
                    /*Meteor.users.update(status_data._id,status_data);
                    Players.update({score: {$gt: 10}},{$addToSet: {badges: "Winner"}},{multi: true});*/
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            } else {
                check(status_data.profile, Object);
                // status_data.createdAt = new Date();
                // status_data.userid = this.id
                check(status_data, Object);
                status_data.createdAt = moment().format("MM/DD/YYYY")
                status_data.userid = this.userId
                status_data.profile.SBOofficer = Meteor.user().officer
                status_data.profile.SBOstatus = "checked"
                    // status_data.status = cleared
                Meteor.users.update(status_data._id, {
                    $set: status_data
                });

            }

        }
    },




    delMessage: function(message) {
        if (this.userId && Meteor.user().username == message.name) {
            // check(message_id, String);
            StudentList.remove(message._id);

        }
    },


    officer: function(officer_data) {
        // console.log(officer_data);
        // console.log(this.userId);

        // officer_data.userId = this.userId;




        check(officer_data, Object);
        Meteor.users.update(this.userId, {
            $set: officer_data
        });

        /*var data = {};
        	var obj = 
        		officer:officer_data
        		
        	};*/

        // data.profile.officer = officer_data;
        // console.log(data);
        // Meteor.users.update(this.userId, {$set: data });




    },


    updateProfile: function(profile_data) {
        // console.log(profile_data);





        if (this.userId) {

            if (profile_data.college == 'CAS') {

                check(profile_data, Object);
                // profile_data.profile = profile_data
                var data = {};
                var obj = {
                    lastName: profile_data.lastName,
                    firstName: profile_data.firstName,
                    middleName: profile_data.middleName,
                    college: profile_data.college,
                    course: profile_data.course,
                    year: profile_data.year,
                    semester: profile_data.semester,
                    SY: profile_data.SY,
                    organizations: [{
                        filter: "BTC"
                    }, {
                        filter: "ComSoc"
                    }, {
                        filter: "EngLang"
                    }, {
                        filter: "NatSci"
                    }],
                    BTCstatus: "uncleared",
                    BTCofficer: "",
                    ComSocstatus: "uncleared",
                    ComSocofficer: "",
                    EngLangstatus: "uncleared",
                    EngLangofficer: "",
                    NatScistatus: "uncleared",
                    NatSciofficer: "",
                    SSDstatus: "uncleared",
                    SSDofficer: "",
                    CASSBOTREASstatus: "uncleared",
                    CASSBOTREASofficer: "",
                    CASSBOGOVstatus: "uncleared",
                    CASSBOGOVofficer: "",
                    CASGUIDANCEstatus: "uncleared",
                    CASGUIDANCEofficer: "",
                    CASSBOADVISERstatus: "uncleared",
                    CASSBOADVISERofficer: "",
                    CHAIRPERSONstatus: "uncleared",
                    CHAIRPERSONofficer: "",
                    CASDEANstatus: "uncleared",
                    CASDEANofficer: ""
                };
                data.username = profile_data.username;
                data.profile = obj;
                console.log(data);
                Meteor.users.update(this.userId, {
                    $set: data
                });

            }
            if (profile_data.college == 'COB') {

                check(profile_data, Object);
                // profile_data.profile = profile_data
                var data = {};
                var obj = {
                    lastName: profile_data.lastName,
                    firstName: profile_data.firstName,
                    middleName: profile_data.middleName,
                    college: profile_data.college,
                    course: profile_data.course,
                    year: profile_data.year,
                    semester: profile_data.semester,
                    SY: profile_data.SY,
                    organizations: [{
                        filter: "BTC"
                    }, {
                        filter: "ComSoc"
                    }, {
                        filter: "EngLang"
                    }, {
                        filter: "NatSci"
                    }],
                    SJHstatus: "uncleared",
                    SJHofficer: "",
                    BTCstatus: "uncleared",
                    BTCofficer: "",
                    JPCCIstatus: "uncleared",
                    JPCCIofficer: "",
                    ComSocstatus: "uncleared",
                    ComSocofficer: "",
                    JPIAstatus: "uncleared",
                    JPIAofficer: "",
                    EngLangstatus: "uncleared",
                    EngLangCofficer: "",
                    PASstatus: "uncleared",
                    PASofficer: "",
                    NatScistatus: "uncleared",
                    NatSciofficer: "",
                    JFMCstatus: "uncleared",
                    JFMCofficer: "",
                    COBGUIDANCEstatus: "uncleared",
                    COBGUIDANCEofficer: "",
                    COBSBOADVISERstatus: "uncleared",
                    COBSBOADVISERofficer: "",
                    COBSBOstatus: "uncleared",
                    COBSBOofficer: ""
                };
                data.username = profile_data.username;
                data.profile = obj;
                console.log(data);
                Meteor.users.update(this.userId, {
                    $set: data
                });

            }
            if (profile_data.college == 'CCDT') {

                check(profile_data, Object);
                // profile_data.profile = profile_data
                var data = {};
                var obj = {
                    lastName: profile_data.lastName,
                    firstName: profile_data.firstName,
                    middleName: profile_data.middleName,
                    college: profile_data.college,
                    course: profile_data.course,
                    year: profile_data.year,
                    semester: profile_data.semester,
                    SY: profile_data.SY,
                    SocPresstatus: "uncleared",
                    SocPresofficer: "",
                    CCEITSBOTREASstatus: "uncleared",
                    CCEITSBOTREASofficer: "",
                    CCEITSBOGOVstatus: "uncleared",
                    CCEITSBOGOVofficer: "",
                    CCEITCHAIRPERSONstatus: "uncleared",
                    CCEITCHAIRPERSONofficer: "",
                    CCEITDEANstatus: "uncleared",
                    CCEITDEANofficer: ""
                };
                data.username = profile_data.username;
                data.profile = obj;
                console.log(data);
                Meteor.users.update(this.userId, {
                    $set: data
                });

            }
            if (profile_data.college == 'CTE') {

                check(profile_data, Object);
                // profile_data.profile = profile_data
                var data = {};
                var obj = {
                    lastName: profile_data.lastName,
                    firstName: profile_data.firstName,
                    middleName: profile_data.middleName,
                    college: profile_data.college,
                    course: profile_data.course,
                    year: profile_data.year,
                    semester: profile_data.semester,
                    SY: profile_data.SY,
                    organizations: [{
                        filter: "BTC"
                    }, {
                        filter: "ComSoc"
                    }, {
                        filter: "EngLang"
                    }, {
                        filter: "NatSci"
                    }],
                    BTCstatus: "uncleared",
                    BTCofficer: "",
                    ComSocstatus: "uncleared",
                    ComSocofficer: "",
                    EngLangstatus: "uncleared",
                    EngLangofficer: "",
                    NatScistatus: "uncleared",
                    NatSciofficer: "",
                    PECIRCLEstatus: "uncleared",
                    PECIRCLEofficer: "",
                    MLTREASstatus: "uncleared",
                    MLTREASCofficer: "",
                    CTESBOstatus: "uncleared",
                    CTESBOofficer: "",
                    MLADVISERstatus: "uncleared",
                    MLADVISERofficer: "",
                    CTESBOADVISERstatus: "uncleared",
                    CTESBOADVISERofficer: "",
                    SSTGTstatus: "uncleared",
                    SSTGTofficer: "",
                    SSLPRINCIPALstatus: "uncleared",
                    SSLPRINCIPALofficer: "",
                    ESLPRINCIPALstatus: "uncleared",
                    ESLPRINCIPALofficer: "",
                    CTECHAIRPERSONstatus: "uncleared",
                    CTECHAIRPERSONofficer: "",
                    CTEDEANstatus: "uncleared",
                    CTEDEANofficer: ""
                };
                data.username = profile_data.username;
                data.profile = obj;
                console.log(data);
                Meteor.users.update(this.userId, {
                    $set: data
                });

            }
            if (profile_data.college == 'CON') {

                check(profile_data, Object);
                // profile_data.profile = profile_data
                var data = {};
                var obj = {
                    lastName: profile_data.lastName,
                    firstName: profile_data.firstName,
                    middleName: profile_data.middleName,
                    college: profile_data.college,
                    course: profile_data.course,
                    year: profile_data.year,
                    semester: profile_data.semester,
                    SY: profile_data.SY,
                    CONSBOTREASstatus: "uncleared",
                    CONSBOTREASofficer: "",
                    CONSBOGOVstatus: "uncleared",
                    CONSBOGOVofficer: "",
                    CONSBOADVISERstatus: "uncleared",
                    CONSBOADVISERofficer: "",
                    YLCORDINATORstatus: "uncleared",
                    YLCORDINATORofficer: "",
                    CONDEANstatus: "uncleared",
                    CONDEANofficer: ""
                };
                data.username = profile_data.username;
                data.profile = obj;
                console.log(data);
                Meteor.users.update(this.userId, {
                    $set: data
                });

            }






        }
    }

});
