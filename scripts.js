// scripts.js
$(document).ready(function() {
    const quizQuestions = [
        {
            question: "全球变暖的主要原因是什么？",
            choices: ["太阳活动", "火山爆发", "人类活动", "海洋变化"],
            correctAnswer: "人类活动"
        },
        // 更多问题...
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
        const questionData = quizQuestions[currentQuestionIndex];
        $('#quiz-container').html(`
            <h3>${questionData.question}</h3>
            <ul id="choices">
                ${questionData.choices.map(choice => `<li><input type="radio" name="answer" value="${choice}">${choice}</li>`).join('')}
            </ul>
            <button id="submit-answer">提交答案</button>
        `);

        $('#submit-answer').click(function() {
            const selectedAnswer = $('input[name="answer"]:checked').val();
            if (selectedAnswer === questionData.correctAnswer) {
                alert("正确！");
            } else {
                alert("不正确，请再试一次！");
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion();
            } else {
                alert("恭喜你完成了测验！");
            }
        });
    }

    showQuestion();
});