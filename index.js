//inisiasi soal dalam quiz
const questions = [
    {     question: "Siapa nama om kumis yang ramah kepada kaum Yahudi pada pertengahan abad 20 ?",
        optionA: "Ngab Owi",
        optionB: "Sule",
        optionC: "Obama",
        optionD: "OM Kumis Nazi",
        correctOption: "optionD"
    },

    {
        question: "Gubernur yang suka nyayi?",
        optionA: "mengGiring Opini",
        optionB: "Biduan Kamil",
        optionC: "Ma'ruf AFK",
        optionD: "Tuan Guru Gen Z",
        correctOption: "optionB"
    },

    {
        question: "Tempat belanja paling ekstrim bagi cewek ?",
        optionA: "Matahari",
        optionB: "Monster",
        optionC: "Grand Hero",
        optionD: "Warung Bik Sumi",
        correctOption: "optionD"
    },

    {
        question: "Budi mengendarai ______ milik ayahnya .",
        optionA: "Supra",
        optionB: "Nmax",
        optionC: "Rubicon",
        optionD: "Ferrari",
        correctOption: "optionC"
    },

    {
        question: "Pagi hari terindah tercatat pernah terjadi pada 7 Desember 1941 . Dimanakah itu ?",
        optionA: "Nevada",
        optionB: "Tokyo",
        optionC: "Mangkung",
        optionD: "Hawaii",
        correctOption: "optionD"
    },

    {
        question: "Presiden indonesia paling ramah ?",
        optionA: "Sans Harto",
        optionB: "Ngab Owi",
        optionC: "Omega 3",
        optionD: "Bro Karno",
        correctOption: "optionA"
    },

    {
        question: "_____ merupakan sekolah dengan lulusan paling anti banting di dunia.",
        optionA: "SMAN 1 Mataram",
        optionB: "American IBM High School",
        optionC: "Suzuran Gakko",
        optionD: "Swiss Academy School",
        correctOption: "optionC"
    },

    {
        question: "Otak dari sebuah perangkat elektronik disebut ?",
        optionA: "Chip/CPU",
        optionB: "RAM 8 GB",
        optionC: "RAM 4 GB",
        optionD: "RAM 2 GB",
        correctOption: "optionA"
    },

    {
        question: "Kekalahan terbesar Manchester United (munyuk) di Anfield dengan skor ?",
        optionA: "2-1",
        optionB: "8-2",
        optionC: "6-3",
        optionD: "7-0 wkwkwkwk",
        correctOption: "optionD"
    },

    {
        question: `Provinsi di indonesia dengan persentase kuyang terbanyak ?`,
        optionA: "Lombok Tengah",
        optionB: "Bali",
        optionC: "Jawa Barat",
        optionD: "Kalimantan Timur",
        correctOption: "optionD"
    },

    {
        question: "Dukun di era digital biasa disebut ?",
        optionA: "Google",
        optionB: "Chrome",
        optionC: "Search Engine",
        optionD: "Orang Pinter",
        correctOption: "optionC"
    },

  
    {
        question: "YouTube Lebih dari... ?",
        optionA: "TV",
        optionB: "WeChat",
        optionC: "Shopee",
        optionD: "TikTok",
        correctOption: "optionA"
    },


    {
        question: "Munchen merupakan sebuah daerah yang terletak di ?",
        optionA: "Jerman Tenggara",
        optionB: "Lombok NTB",
        optionC: "Sumatra Barat",
        optionD: "Texas Amerika",
        correctOption: "optionB"
    },

    {
        question: "Liverpool adalah tim EPL terbaik !",
        optionA: "Salah",
        optionB: "Halu",
        optionC: "Kocak",
        optionD: "Benar sekali",
        correctOption: "optionD"
    },

    {
        question: "Nama lembaga/organisasi pengatur tatanan dunia adalah ?",
        optionA: "Sunda Empire",
        optionB: "PBB",
        optionC: "FIFA",
        optionD: "PDI Perjuangan",
        correctOption: "optionA"
    },

    {
        question: "Indonesia merupakan negara kepulauan dengan jumlah 17+ ribu pulau, oleh sebab itu... ?",
        optionA: "Banyak Pelabuhan",
        optionB: "Hasil Laut Melimpah",
        optionC: "Laris dipasar dunia",
        optionD: "Banyak pantai indah",
        correctOption: "optionC"
    },

    {
        question: "____ adalah hewan yang suka bergaul ?",
        optionA: "MasBro",
        optionB: "Monyet",
        optionC: "Tupai",
        optionD: "Singa",
        correctOption: "optionA"
    },

    {
        question: "Tentara/pasukan terkuat di indonesia bernama... ?",
        optionA: "Kopasus",
        optionB: "Denjaka",
        optionC: "Pemuda Pancasila",
        optionD: "Brimob",
        correctOption: "optionC"
    },

    {
        question: "Kembang api paling meriah diletuskan di kota ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Berlin",
        optionD: "Hiroshima",
        correctOption: "optionD"
    },

    {
        question: "Bayar ditempat merupakan metode paling disukai bapak/ibu warga wakanda. COD singkatan dari... ?",
        optionA: "Cash Or Duel",
        optionB: "Cash On Delivery",
        optionC: "Call of Duty",
        optionD: "Car Orange Disk",
        correctOption: "optionA"
    },

    {
        question: "Siapa Artis/Tokoh paling cool ?",
        optionA: "Sopo",
        optionB: "Zyan Malik",
        optionC: "Ruben Onsu",
        optionD: "Ijat",
        correctOption: "optionD"
    },

    {
        question: "Buka bersama (Bukber) merupakan ajang... ?",
        optionA: "Silaturahmi",
        optionB: "Adu Outfit",
        optionC: "Kumpul-Kumpul",
        optionD: "Bernostalgia",
        correctOption: "optionB"
    },

    {
        question: "DPR mempunyai sebuah kesaktian saat membela hak rakyat yang disebut... ?",
        optionA: "Berjalan Diatas Air",
        optionB: "Akatsuki/Turu Mode",
        optionC: "Breath Of Fire",
        optionD: "Smart Mode",
        correctOption: "optionB"
    },

    {
        question: "Korut dipimpin oleh... ?",
        optionA: "Kim Luhut Penjaitan",
        optionB: "Soo lie hin",
        optionC: "K.J Unch",
        optionD: "Dilan Cepmek",
        correctOption: "optionC"
    },

    {
        question: "Cara menjadi orang kaya dengan ?",
        optionA: "Kerja Keras",
        optionB: "Pesugihan",
        optionC: "Beli Kopi 80rb",
        optionD: "Mencari Hoki",
        correctOption: "optionC"
    },

    { 
        question: "Siapakah raja jalanan?",
        optionA: "Pejabat",
        optionB: "Emak-Emak",
        optionC: "Anak DPR",
        optionD: "Pembalap",
        correctOption: "optionB"
    },

    { 
        question: "Ras terkuat dibumi adalah... ?",
        optionA: "Kecoa",
        optionB: "Tardigrada",
        optionC: "Wibu",
        optionD: "Puan",
        correctOption: "optionC"
    },

    { 
        question: "Mengapa penguin tidak bisa terbang ?",
        optionA: "Mager",
        optionB: "Jagonya Renang",
        optionC: "Sudah Takdirnya",
        optionD: "Biar Antimanstream",
        correctOption: "optionA"
    },

    { 
        question: "Alasan oranng memakai jam adalah... ?",
        optionA: "Peduli waktu",
        optionB: "Mampu beli",
        optionC: "Untuk Gaya",
        optionD: "Semua Benar",
        correctOption: "optionD"
    },

    { 
        question: "Tujuan Amerika ke Irak untuk... ?",
        optionA: "Bekerja Sama",
        optionB: "Ngelut Minyak",
        optionC: "Bertamasya",
        optionD: "Bukber",
        correctOption: "optionB"
    },

    { 
        question: "Apa yang terjadi jika Isaac Newton kejatuhan Duren ?",
        optionA: "Mokad",
        optionB: "Kepalanya Pecah berdarah",
        optionC: "Kata 'Jatuh' jadi memusingkan",
        optionD: "Menghindar",
        correctOption: "optionB"
    },

    { 
        question: "Kenapa B selalu kedinginan ?",
        optionA: "Tidak Mempunyai Jaket",
        optionB: "Di luar hujan",
        optionC: "Sedang sakit",
        optionD: "Berada Di Tengah AC",
        correctOption: "optionD"
    },


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 15 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 19) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 6) {
        remark = "Bodohnya Kebangetan."
        remarkColor = "red"
    }
    else if (playerScore >= 7 && playerScore < 15) {
        remark = "Segini doank?"
        remarkColor = "orange"
    }
    else if (playerScore >= 16) {
        remark = "Mantap!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 20) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}