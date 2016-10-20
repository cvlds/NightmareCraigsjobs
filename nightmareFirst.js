var jquery = require('jquery')
var Nightmare = require ('nightmare'),
    nightmare = Nightmare()

//uses the first argument passed as the city to be searched
var city = process.argv[2]

//visits city specified by input
nightmare.goto('http://' + city + '.craigslist.org/search/cpg?is_paid=yes&postedToday=1')

//2second wait
.wait(2000)

.evaluate(function(){
  //holds jobs gathered
  var jobs = [];

  //creates job object with title and url, then push jobs to array
  $('.hdrlnk').each(function(){
    item = {}
    item["title"] = $(this).text()
    item["url"] = $(this).attr("href")
    jobs.push(item)
  })
    //pass the jobs array forward, so it can later be looped
    return jobs
})
.end()
.then(function(result){
  for(job in result){
  //prints results to console
  console.log(result[job].title)
  console.log(result[job].url)
  console.log("\n");
  }
})
