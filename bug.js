```javascript
// Assuming 'users' is your collection name
db.users.aggregate([
  {
    $match: {
      age: {
        $gt: 25
      }
    }
  },
  {
    $group: {
      _id: "$city",
      averageAge: {
        $avg: "$age"
      },
      count: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      averageAge: -1
    }
  }
])
```