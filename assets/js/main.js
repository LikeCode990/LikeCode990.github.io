function setGrades() {
    const gradeList = {
        'programming-basics-grade': 0 ,
        'computer-science-grade': 0,
        'data-science-grade': 0,
        'software-engineering-grade': 0,
        'object-oriented-programming-grade': 0,
        'programme-career-grade': 0,
        'agile-team-management-grade': 0,
        'applied-client-solutions-grade': 0,
        'foundations-grade': 0,
        'requirements-modeling-grade': 0,
        'foundation-of-data-grade': 0,
        'web-application-development-grade': 0
    };



    for(const id in gradeList) {
        const gradeElement = document.getElementById(id);
        if (gradeElement) {
            gradeElement.textContent = gradeList[id];
        }
    }

    let earnedEC = 0;
    for (let id in gradeList) {
        if (gradeList[id] >= 5.5) {
            earnedEC = earnedEC + 5;
        }
    }

    let progressGrade = (earnedEC / 60) * 100;
    if (progressGrade > 100) {
        progressGrade = 100;
    }
    const progressBarGrade = document.getElementById('progressbarGrade');
    progressBarGrade.style.width = `${progressGrade}%`;
    progressBarGrade.classList.toggle('is-done', progressGrade >= 100);
    progressBarGrade.classList.toggle('is-half', progressGrade >= 50 && progressGrade < 100);

}

setGrades();
