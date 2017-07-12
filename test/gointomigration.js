var GointoMigration = artifacts.require("GointoMigration");

contract("GointoMigration", function(accounts) {

    var originalAdmin = accounts[0];
    var firstManager = accounts[1];
    var secondManager = accounts[2];
    var deadManager = accounts[3];
    var deadAdmin = accounts[4];
    var testAddress = "0xd38e20bb2b051b906346226c8e63219d21010146";

    it("second admin should not yet have any permissions", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.getPermissions(deadAdmin);

        }).then(function(retval) {

            assert.isFalse(retval[0], "isAdmin should be false");
            assert.isFalse(retval[1], "isManager should be false");

        });

    });

    it("should add second admin", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.addAdmin(deadAdmin, {from: originalAdmin});

        }).then(function(retval) {

            return mig.getPermissions(deadAdmin);

        }).then(function(retval) {

            assert.isTrue(retval[0], "isAdmin should be true");
            assert.isTrue(retval[1], "isManager should be true");

        });

    });

    it("should add first manager", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.addManager(firstManager, {from: deadAdmin});

        }).then(function(retval) {

            return mig.getPermissions(firstManager);

        }).then(function(retval) {

            assert.isFalse(retval[0], "isAdmin should be false");
            assert.isTrue(retval[1], "isManager should be true");

        });

    });

    it("should add second manager", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.addManager(secondManager, {from: deadAdmin});

        }).then(function(retval) {

            return mig.getPermissions(secondManager);

        }).then(function(retval) {

            assert.isFalse(retval[0], "isAdmin should be false");
            assert.isTrue(retval[1], "isManager should be true");

        });

    });

    it("should add third manager", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.addManager(deadManager, {from: deadAdmin});

        }).then(function(retval) {

            return mig.getPermissions(deadManager);

        }).then(function(retval) {

            assert.isFalse(retval[0], "isAdmin should be false");
            assert.isTrue(retval[1], "isManager should be true");

        });

    });

    it("should allow second admin to remove third manager", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.removeManager(deadManager, {from: deadAdmin});

        }).then(function(retval) {

            return mig.getPermissions(deadManager);

        }).then(function(retval) {

            assert.isFalse(retval[0], "isAdmin should be false");
            assert.isFalse(retval[1], "isManager should be false");

        });

    });

    it("should allow second admin to set a ratingstore contract", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.setContract("gointosecond", testAddress, {from: deadAdmin});

        }).then(function(retval) {

            return mig.getContract("gointosecond");

        }).then(function(retval) {

            assert.equal(retval, testAddress, "returned address should be set");

        });

    });

    it("should allow second manager to set a etherep contract", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.setContract("gointo", testAddress, {from: secondManager});

        }).then(function(retval) {

            return mig.getContract("gointo");

        }).then(function(retval) {

            assert.equal(retval, testAddress, "returned address should be set");

        });

    });

    it("should allow first admin remove the second admin", function() {

        var mig;

        return GointoMigration.deployed().then(function(instance) {

            mig = instance;

            return mig.removeAdmin(deadAdmin, {from: originalAdmin});

        }).then(function(retval) {

            return mig.getPermissions(deadAdmin);

        }).then(function(retval) {

            assert.isFalse(retval[0], "isAdmin should be false");
            assert.isFalse(retval[1], "isManager should be false");

        });

    });

});