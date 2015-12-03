//create summary section
var summary = {

	"about":"My name is Zimenco Igor. I love learning and coding.\
			I love to learn how programs work, and make my own program to solve challenging problems.\
			I like watching online courses because they enrich my Computer Science skills.\
			Programming has been always a fun activity for me.<br><br>",

	display : function(){

		var formattedHtmlSummary = 	HTMLsummarySection.replace("%data%",summary.about);
		$("#summary").append(HTMLsummaryStart);
		$(".summary-entry").append(formattedHtmlSummary);
	}
};



//create an array of works
var work = {
	"jobs":[
		{
		  "employer":"Unifun",
		  "url":"http://www.unifun.com/",
		  "title":"Python/PHP Developer",
		  "location":"Moldova, Chisinau",
		  "dates":"4 june 2014 - 4 september 2014",
		  "description":"Unifun is a dynamic, innovative company operating since 2005 in the field of mobile services, \
		   content & service provider.\
		   <br><b>My responsabilities were</b>: <br><i>Write code for an existing Python/Django project<br>Testing service changes with mobile operators\
		   <br> Writing synchronization scripts in PHP that were intended to synchronize Oracle databases with MySQL databases\
		   <br>Writing admin interfaces in PHP, JS, JQuery, HTML, CSS.<br></i>"
		},
		{
		  "employer":"Endava",
		  "url":"http://careers.endava.com/en/Career-Opportunities/Internship-and-Graduate-Programmes/Internship-Programme/Software-Development.aspx",
		  "title":"Internship program",
		  "location":"Moldova, Chisinau",
		  "dates":"17 August 2015 - 17 November 2015",
		  "description":"Endava is a privately owned IT services company with over 2,500 employees. \
		  Endava works with some of the world’s biggest brands <br> in Finance, Insurance, Telecommunications, Media, \
     	  Technology, and Retail helping them harness digital technologies<br> \
		  and transforming them into more agile, responsive and valuable businesses.<br> \
		  <strong>During the internship program were taught the folowing technologies:</strong><br> \
		  <i><strong>Java 7 SE , SQL/Oracle DB 11, JPA/Hibernate, Spring Framework, Java Web, JSF, Git, Maven.</strong><br>\
		  Theoretical knowladge was enhanced by making a <strong>personal project</strong> and taking part in a <strong>real company project</strong>.</i> \
		  "
		}
	],

	display : function(){
		for(job in work.jobs){			
			var formatted_employer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			formatted_employer = formatted_employer.replace("#",work.jobs[job].url);
			var formatted_title = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formatted_work_dates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formatted_work_location = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formatted_work_description = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formatted_employer+formatted_title);
			$(".work-entry:last").append(formatted_work_dates);
			$(".work-entry:last").append(formatted_work_location);
			$(".work-entry:last").append(formatted_work_description);
		}
	}
};

//create an array of projects
var projects = {
	"projects":[
		{
			"title":"Wiki Web Application",
			"dates":"2013",
			"description":"This web app a wiki page that anyone can signin and write or modify the posts,\
			 and it was a final project for Udacity course cs253 (Web Development).\
			 The project was built on Google App Engine with Jinja2 template",
			"image":["images/wiki_history.png"],
			"url":"http://cs253class1992.appspot.com/"
		},
		{
			"title":"Algorithms in Java",
			"dates":"2013",
			"description":"My study of Algorithm's, mini projects were the assigments for every week of the Coursera\
			 Algorithms Part I class",
			"image":["images/algorithms_class.png"],
			"url":"https://www.coursera.org/course/algs4partI"
		},
		{
			"title":"CUDA C Image Algorithms",
			"dates":"2013",
			"description":"Projects were the part of the Udacity Intro to Parallel Programming course",
			"image":["images/cuda_C.jpg"],
			"url":"https://github.com/igori0511/CUDA-C-Projects"
		},
		{
			"title":"Resume Project",
			"dates":"2014-2015",
			"description":"This web page is my resume page. The project was built on Google App Engine,\
			 and the project was focused on using JSON like objects to manage content more efficiently.<br>",
			"image":["images/resume_project.png"],
			"url":"#"
		},		
		{
			"title":"Classic Arcade Game Clone(Frogger)",
			"dates":"2015",
			"description":"The project was built on Google App Engine, and the project was focused on using\
			 JavaScript and Canvas to make a classic arcade game on a web page.",
			"image":["images/frogger_project.png"],
			"url":"http://iz-frogger.appspot.com/"
		},		
		{
			"title":"Wiki on Java (Endava internship)",
			"dates":"2015",
			"description":"The project was built on Java SE, and it was focused on using\
			 learned technologies on internship",
			"image":["images/post_history_wiki_java.png"],
			"url":"http://careers.endava.com/en/Career-Opportunities/Internship-and-Graduate-Programmes/Internship-Programme/Software-Development.aspx"
		}	
	],
	display : function(){

		var i = 0;

		for(var project in projects.projects){
			i++;
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			formattedTitle = formattedTitle.replace("#",projects.projects[project].url);
			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			
			
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			
			for(var imageId in projects.projects[project].image){

				var formattedDImage= HTMLprojectImage.replace("%data%",projects.projects[project].image[imageId]);
				var formattedFinalPicture = formattedDImage.replace("%modal_id%",HTMLprojectImageId+i);
				$(".project-entry:last").append(formattedFinalPicture);

			}

		}

	}
};
//biography object
var bio = {
	"name": "Igor",
	"role":"Web Developer",
	"age" :23,
	"contacts":{
		"mobile":"+373 79890981",
		"email":"diaser555@gmail.com",
		"github":"igori0511",
		"location":"Moldova, Chisinau"
	},
	"pictute":"images/me.jpg",
	"welcome_msg":"Hi! I'm Igor, and I love learning and coding",
	"skills":["Java 7 Standard Edition","Spring Framework (Spring Core,Spring MVC)","SQL / ORACLE DB 11 / MySQL","JPA / Hibernate","JSP","JSF with Primefaces","Tomcat 8","Git","Maven","C Programming Language","Python 2.7"],
	display : function(){

		//header
		var formattedName = HTMLheaderName.replace("%data%","Igor Zimenco");
		var formattedRole = HTMLheaderRole.replace("%data%","Junior Java Developer");
		var formattedPicture = HTMLbioPic.replace("%data%","images/fry.jpg");
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome_msg);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPicture);
		$("#header").append(formattedWelcome);

		//skills
		var bio_skills_length = bio["skills"].length;
		if(bio_skills_length > 0){
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio_skills_length; i++) {
				var formattedSkill = HTMLskills.replace("%data%",bio["skills"][i]);
				$('#skills').append(formattedSkill);
			};	
		}
		//show contact information
		var formattedContactMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
		var formattedContactEmail  = HTMLemail.replace("%data%",bio.contacts["email"]);
		var formattedContactGitHub = HTMLgithub.replace("%data%",bio.contacts["github"]);
		var formattedContactLocation = HTMLlocation.replace("%data%",bio.contacts["location"]);
		$("#topContacts").append(formattedContactMobile);
		$("#topContacts").append(formattedContactEmail);
		$("#topContacts").append(formattedContactGitHub);
		$("#topContacts").append(formattedContactLocation);

	},
	displayLetsConnect : function(){
		//show contact information
		var formattedContactMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
		var formattedContactEmail  = HTMLemail.replace("%data%",bio.contacts["email"]);
		var formattedContactGitHub = HTMLgithub.replace("%data%",bio.contacts["github"]);
		var formattedContactLocation = HTMLlocation.replace("%data%",bio.contacts["location"]);
		$("#footerContacts").append(formattedContactMobile);
		$("#footerContacts").append(formattedContactEmail);
		$("#footerContacts").append(formattedContactGitHub);
		$("#footerContacts").append(formattedContactLocation);		
	}	
};

//education object
var education = {
	"schools":[
		{
		  "name":"Technical University of Moldova",
		  "city":"Moldova,Chisinau",
		  "location":"Technical University of Moldova",
		  "degree":"BA",
		  "major":["Applied Informatics"],
		  "dates":"2012 - 18 june 2015",
		  "url":"http://www.utm.md/en"
		}
	],
	"onlineCourse":[
		{
			"title":"Intro to Computer Science",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/cs101"
		},
		{
			"title":"An Introduction to Interactive Programming in Python",
			"school":"Coursera",
			"dates":"",
			"url":"https://www.coursera.org/course/interactivepython"
		},
		{
			"title":"College Algebra",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/ma008"
		},
		{
			"title":"Intro to Parallel Programming",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/cs344"
		},
		{
			"title":"Intro to Java Programming",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/cs046"
		},
		{
			"title":"Web Development",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/cs253"
		},
		{
			"title":"Algorithms, Part I",
			"school":"Coursera",
			"dates":"",
			"url":"https://www.coursera.org/course/algs4partI"
		},
		{
			"title":"Algorithms, Part II",
			"school":"Coursera",
			"dates":"",
			"url":"https://www.coursera.org/course/algs4partII"
		},
		{
			"title":"Intro to Algorithms",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/cs215"
		},
		{
			"title":"Calculus One",
			"school":"Coursera",
			"dates":"",
			"url":"https://www.coursera.org/learn/calculus1"
		},
		{
			"title":"Programming Foundations with Python ",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/ud036"
		},
		{
			"title":"Introduction to Computer Arhitecture",
			"school":"Stepic",
			"dates":"",
			"url":"http://goo.gl/8Va04P"
		},
		{
			"title":"Software Security",
			"school":"Coursera",
			"dates":"",
			"url":"https://www.coursera.org/course/softwaresec"
		},
		{
			"title":"Programming Languages",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/cs262"
		},
		{
			"title":"Intro to HTML and CSS",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/ud304"
		},
		{
			"title":"How to Use Git and GitHub",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/ud775"
		},
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/ud804"
		},
		{
			"title":"Intro to jQuery",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/ud245"
		},
		{
			"title":"Object-Oriented JavaScript",
			"school":"Udacity",
			"dates":"",
			"url":"https://www.udacity.com/course/ud015"
		}
	],

	displaySchools : function(){

		for(var entry in education.schools){
			var educationSchoolName = HTMLschoolName.replace("%data%",education.schools[entry].name);
			educationSchoolName = educationSchoolName.replace("#",education.schools[entry].url);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[entry].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[entry].city);
			var formattedSchoolsMajor = HTMLschoolMajor.replace("%data%",education.schools[entry].major);
			$("#education").append(HTMLschoolStart);
			$('.education-entry:last').append(educationSchoolName);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedSchoolLocation);
			$('.education-entry:last').append(formattedSchoolsMajor);
		}
		

	},

	displayOnlineCourses : function() {

		$("#education").append(HTMLonlineClasses);

		for(var entry in education.onlineCourse){
			$("#education").append(HTMLschoolStart);
			var formmatedOnlineSchoolName = HTMLonlineTitle.replace("%data%",education.onlineCourse[entry].title);
			formmatedOnlineSchoolName = formmatedOnlineSchoolName.replace("#",education.onlineCourse[entry].url);
			var formattedOnlineSchoold = HTMLonlineSchool.replace("%data%",education.onlineCourse[entry].school);
			$('.education-entry:last').append(formmatedOnlineSchoolName+formattedOnlineSchoold);

		}
	}

};


// Calls display functions in each section
bio.display();
bio.displayLetsConnect();
summary.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();
// get a google map
$("#mapDiv").append(googleMap);
