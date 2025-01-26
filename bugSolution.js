```javascript
//Improved aggregation pipeline
db.users.aggregate([
  {
    $match: {
      age: {
        $type: "number",
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
  },
  {
    $project: {
      _id: 1,
      averageAge: 1,
      count: 1,
      _v: 0
    }
  }
]).forEach(printjson)
```