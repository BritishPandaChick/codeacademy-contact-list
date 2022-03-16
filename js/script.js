var friends = new Object();

var friends = {
  bill: {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
  },
  steve: {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(206 455-5556)",
    address: ['1989 Apple Road', 'Palo Alto', 'CA', '93948']
  }
};

var list = function(friends) {
  for (var key in friends) {
    console.log(key);
  }
};

var search = function(name) {
  for (var key in friends) {
    if (friends[key].firstName === name) {
      console.log(friends[key]);
      return friends[key];
    }
  }
};
