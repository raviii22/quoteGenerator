let btn = document.querySelector("#new-qoute");
let qu = document.querySelector(".qoute");
let person = document.querySelector(".person");

const qoutes = [{
    qoute:`sometime people don't deverve second chance, be carefull`,
    person: `Ravi` 
},
{
    qoute: ` Forgive your enemies, but never forget their names. `,
    person: `John F. Kennedy`
},
{
    qoute: ` Names are the sweetest and most important sound in any language. `,
    person : ` Dale Carnegie`
},
{
    qoute: `When u start creating something then coding become really interesting`,
    person:`sidharthhhhhh`
},
{
    qoute: `Nothing is impossible. The word itself says 'I'm possible!`,
    person:`Audrey Hepburn`
},
{
    qoute: `"If u wanna fly like a eagle then leave the support of butterflies"`,
    person:`Khan sir`
},
{
    qoute: `There is nothing impossible to they who will try.`,
    person:`Alexander the Great`
},
{
    qoute: `My new life is a cost of Old one.`,
    person:`old friend`
},
{
    qoute: `Success is not final, failure is not fatal: it is the courage to continue that counts.`,
    person:` Winston Churchill`
},
{
    qoute: `Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.`,
    person:` Lady Gaga`
},
{
    qoute: `Belief creates the actual fact.`,
    person:` William James`
},
{
    qoute: `In a gentle way, you can shake the world
    `,
    person:`Mahatma Gandhi`
},
{
    qoute: 'When you have a dream, you have got to grab it and never let go.',
    person: 'Carol Burnett'
}
];

btn.addEventListener('click', function(){

let random = Math.floor(Math.random() * qoutes.length);// 1:28min
    
qu.innerText = qoutes[random].qoute;

person.innerText = qoutes[random].person;

})