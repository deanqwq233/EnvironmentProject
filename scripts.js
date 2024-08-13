// scripts.js
$(document).ready(function () {
    const quizQuestions = [
        {
            question: "全球变暖的主要原因是什么？",
            choices: ["太阳活动", "火山爆发", "人类活动", "海洋变化"],
            correctAnswer: "人类活动"
        },
        {
            question: "地球一小时活动的目的是什么？",
            choices: ["减少一小时的电力消耗", "提高公众对气候变化的认识", "鼓励人们使用更多的可再生能源", "促进各国政府间的环保合作"],
            correctAnswer: "人类活动"
        },
        {
            question: "哪种能源是可再生且对环境影响相对较小的？",
            choices: ["煤炭", "核能", "太阳能", "石油"],
            correctAnswer: "太阳能"
        },
        {
            question: "塑料污染对海洋生态系统的主要影响是什么？",
            choices: ["提高海水温度", "增加海洋生物多样性", "破坏海洋食物链", "减少海水含氧量"],
            correctAnswer: "破坏海洋食物链"
        },
        {
            question: "减少碳排放的最有效个人行为之一是？",
            choices: ["多吃肉类食品", "频繁使用私家车出行", "使用公共交通工具或骑行", "增加家用电器使用时间"],
            correctAnswer: "使用公共交通工具或骑行"
        },
        {
            question: "森林砍伐的主要驱动力之一是什么？",
            choices: ["自然灾害", "保护野生动植物", "农业扩张和城市化", "气候变化"],
            correctAnswer: "农业扩张和城市化"
        },
        {
            question: "以下哪种做法有助于减少水体富营养化？",
            choices: ["大量使用化肥和农药", "减少工业废水排放", "随意丢弃塑料垃圾", "增加城市绿化面积但不做雨水收集"],
            correctAnswer: "减少工业废水排放"
        },
        {
            question: "在各种能源中，哪种能源的碳排放量最低？",
            choices: ["煤炭", "石油", "天然气", "太阳能"],
            correctAnswer: "太阳能"
        },

        {
            question: "以下哪种行为有助于减少水体污染？",
            choices: ["随意丢弃垃圾", "在河流中游泳", "合理使用洗涤剂", "排放工业废水"],
            correctAnswer: "合理使用洗涤剂"
        },

        {
            question: "什么是生物多样性？",
            choices: ["物种的数量", "生态系统的复杂性", "基因的多样性", "所有上述之和"],
            correctAnswer: "所有上述之和"
        },

        {
            question: "塑料回收标志中的数字代表什么？",
            choices: ["塑料制品的重量", "回收的难度", "塑料的类型", "可回收的次数"],
            correctAnswer: "塑料的类型"
        },

        {
            question: "节约用水可以采取哪些措施？",
            choices: ["长时间洗澡", "安装节水装置", "不及时修复漏水", "大量使用洗衣机"],
            correctAnswer: "安装节水装置"
        },

        {
            question: "森林对于环境保护有什么重要作用？",
            choices: ["提供木材资源", "增加土壤侵蚀", "吸收二氧化碳", "减少水源"],
            correctAnswer: "吸收二氧化碳"
        }
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

        $('#submit-answer').click(function () {
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