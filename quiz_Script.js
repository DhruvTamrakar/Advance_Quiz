const signbox = document.getElementById("signin-box")
        const glabel = document.getElementById("gmail-label")
        const ginput = document.getElementById("gmail-input")
        const submit = document.getElementById("submit")
        const pop = document.getElementById("pop")
        const continuebutton = document.getElementById("continue")
        const container = document.getElementById("container")
        const question = document.getElementById("question")
        const index = document.getElementById("index")
        const op1 = document.getElementById("op1")
        const op2 = document.getElementById("op2")
        const op3 = document.getElementById("op3")
        const op4 = document.getElementById("op4")
        const option = document.getElementById("option")


        window.addEventListener("load", () => {
            signbox.style.transform = "translatey(-15vh)";
            signbox.style.opacity = "10"

        })
        submit.addEventListener("click", () => {
            if (ginput.value === "") {
                console.error("Input Gmail is Undefine...")
                alert("Submit is Undefine, Please Submit Valid Gmail")
            } else {
                usergmail = ginput.value
                submitgmail()
            }
        })
        continuebutton.addEventListener("click", async () => {
            signbox.style.display = "none"
            pop.style.display = "none"
            container.style.display = "grid"
            usergmail = ginput.value
            localStorage.setItem(usergmail, score)
        })
        let usergmail = "";

        let submitgmail = async () => {
            if (localStorage.getItem(usergmail) !== null) {
                pop.style.display = "block"
                signbox.style.filter = "blur(2px)"
                console.warn(`${usergmail}: You are already sign in`)
            } else {
                usergmail = ginput.value
                localStorage.setItem(usergmail, score)
                signbox.style.display = "none"
                pop.style.display = "none"
                container.style.display = "grid"
            }
        }


        const qa = {
            "What is the capital of France?": "Paris",
            "What is 2 + 2?": "4",
            "Who wrote 'To Kill a Mockingbird'?": "Harper Lee",
            "What is the boiling point of water?": "100°C",
            "Who is the current President of the United States?": "Joe Biden",
            "What is the largest planet in our solar system?": "Jupiter",
            "What is the chemical symbol for gold?": "Au",
            "What is the speed of light?": "299,792,458 meters per second",
            "Who painted the Mona Lisa?": "Leonardo da Vinci",
            "What is the tallest mountain in the world?": "Mount Everest"
        };
        let qarr = Object.keys(qa)
        let aarr = Object.values(qa)

        let n = 0
        let qnum = 1
        let score = 0
        index.value = (`Question: ${qnum}`)

        async function Q(ans) {
            if (ans === aarr[n]) {
                score++
                localStorage.setItem(usergmail, score)
            }
            n++;

            console.log(`Score = ${score}`)
            if (n < qarr.length) {
                qnum++;
                index.value = (`Question: ${qnum}`)

                setqanda(n);
            } else {
                question.value = "Quiz finished! Final score: " + score;
                op1.value = "N";
                op2.value = "I";
                op3.value = "C";
                op4.value = "E";
            }
        }
        async function setqanda(n) {
            question.value = qarr[n];
            let options = [aarr[n]];
            op1.value = ""
            op2.value = ""
            op3.value = ""
            op4.value = ""


            let num = Math.floor(Math.random() * 4)
            if (num == 0) {
                op1.value = aarr[n]
            } else if (num == 1) {
                op2.value = aarr[n]
            } else if (num == 2) {
                op3.value = aarr[n]
            } else {
                op4.value = aarr[n]
            }

            let num1 = Math.floor(Math.random() * 10)
            let num2 = Math.floor(Math.random() * 10)
            let num3 = Math.floor(Math.random() * 10)
            let num4 = Math.floor(Math.random() * 10)

            switch (aarr[n]) {
                case op1.value:
                    op2.value = aarr[num2]
                    op3.value = aarr[num3]
                    op4.value = aarr[num4]
                    break;
                case op2.value:
                    op1.value = aarr[num1]
                    op3.value = aarr[num3]
                    op4.value = aarr[num4]
                    break;
                case op3.value:
                    op2.value = aarr[num2]
                    op1.value = aarr[num1]
                    op4.value = aarr[num4]
                    break;
                case op4.value:
                    op2.value = aarr[num2]
                    op3.value = aarr[num3]
                    op1.value = aarr[num1]
                    break;

                default:
                    break;
            }
        }

        op1.addEventListener('click', () => Q(op1.value))
        op2.addEventListener('click', () => Q(op2.value))
        op3.addEventListener('click', () => Q(op3.value))
        op4.addEventListener('click', () => Q(op4.value))

        setqanda(n)
  