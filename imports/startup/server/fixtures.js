import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(( ) => {
    const userExists = Meteor.users.findOne( );

    const Names = {{
            "first_name": "Donavon",
            "last_name": "Skyram"
        }, {
            "first_name": "Chad",
            "last_name": "Rao"
        }, {
            "first_name": "Dom",
            "last_name": "Godbehere"
        }, {
            "first_name": "Birdie",
            "last_name": "Pedracci"
        }, {
            "first_name": "Nerita",
            "last_name": "Shillom"
        }, {
            "first_name": "Derward",
            "last_name": "Tick"
        }, {
            "first_name": "Alano",
            "last_name": "Kolodziejski"
        }, {
            "first_name": "Elbertine",
            "last_name": "Lademann"
        }, {
            "first_name": "Annabella",
            "last_name": "Luisetti"
        }, {
            "first_name": "Nolie",
            "last_name": "Hame"
        }, {
            "first_name": "Dewain",
            "last_name": "Blythe"
        }, {
            "first_name": "Minor",
            "last_name": "Naile"
        }, {
            "first_name": "Myrwyn",
            "last_name": "Deeming"
        }, {
            "first_name": "Johnnie",
            "last_name": "Rolley"
        }, {
            "first_name": "Joletta",
            "last_name": "Haskins"
        }, {
            "first_name": "Mycah",
            "last_name": "Mundle"
        }, {
            "first_name": "Bill",
            "last_name": "Eberz"
        }, {
            "first_name": "Kippar",
            "last_name": "Grannell"
        }, {
            "first_name": "Isobel",
            "last_name": "Hinkley"
        }, {
            "first_name": "Juliann",
            "last_name": "Godin"
        }, {
            "first_name": "Cecilio",
            "last_name": "McCorry"
        }, {
            "first_name": "Jennine",
            "last_name": "Suthworth"
        }, {
            "first_name": "Amerigo",
            "last_name": "Tevelov"
        }, {
            "first_name": "Miriam",
            "last_name": "Shilstone"
        }, {
            "first_name": "Laney",
            "last_name": "Ungerechts"
        }, {
            "first_name": "Chere",
            "last_name": "Troppmann"
        }, {
            "first_name": "Chancey",
            "last_name": "Truman"
        }, {
            "first_name": "Hulda",
            "last_name": "Sheal"
        }, {
            "first_name": "Flossi",
            "last_name": "Gerrelt"
        }, {
            "first_name": "Konstantine",
            "last_name": "Hasslocher"
        }
}

var count = Object.keys( Names ).length;

for ( i = 0; i < count; i++ ) {
  student = Names[i];
  fname = student[i];
  sname = student[i];

  studentID = Math.floor(Math.random() * (30000 - 10000) + 10000)

  username = fname[0] + sname[0] + studentID;

  Accounts.createUser({
    username: username,
    password: "123456",
    profile: {
      email: studentID + "@woking.ac.uk",
      id: studentID
    }
  })
}

if ( !userExists ) {
    const userId = Accounts.createUser({ username: 'admin', password: '123456' });

    Roles.addUsersToRoles(userId, [ 'admin' ]);
}
});
