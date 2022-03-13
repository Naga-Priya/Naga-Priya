let questions = [
    {   
        question:"What is HTML",
        option1:"Hyper Terminal Markup Language",
        option2:"Highlignt text Marking Language",
        option3:"Hyper Text Markup Language",
        option4:"Hexadecimal Transaction Modeling Language",
        answer:3
    },
    {
        question:"HTML is used for:",
        option1:"Defining structure of webpage",
        option2:"Design a webserver",
        option3:"High speed text transfer",
        option4:"Creating colorful designs",
        answer:1
    },
    {
        question:"Choose the Semantic Tag",
        option1:"<i>",
        option2:"<ul>",
        option3:"<article>",
        option4:"<table>",
        answer:3
    },
    {
        question:"Choose the Physical Tag",
        option1:"<i>",
        option2:"<ul>",
        option3:"<article>",
        option4:"<table>",
        answer:1
    },
    {
        question:"Which tag is used to create a List",
        option1:"<list>",
        option2:"<ul>",
        option3:"<item>",
        option4:"<lt>",
        answer:2
    }
];

sessionStorage.setItem("Score","0")
function validate(event){
    //enable button if end of questions is not reached
    if(Number(sessionStorage.getItem("idx")) != questions.length-1)
    {
        $(next).prop('disabled',false);

    }
    if(event.target.dataset["choice"] == questions[Number(sessionStorage.getItem("idx"))].answer){
        //change color of option
        // event.target.
        let score = Number(sessionStorage.getItem("Score")) +1;
        sessionStorage.setItem("Score",score.toString());
    }

}