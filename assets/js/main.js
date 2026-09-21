const setGrades = () => {
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

    // sum all grades
    const totalGrade = Object.values(gradeList).reduce((sum, grade) => sum + grade, 0);
    const progressGrade = ((totalGrade / 60) * 100).toFixed(2);
    document.getElementById('progressbarGrade').style.width = `${progressGrade}%`;

    if (progressGrade >= 100) {
        document.getElementById('progressbarGrade').style.backgroundColor = 'green';
    }else if (progressGrade >= 50) {
        document.getElementById('progressbarGrade').style.backgroundColor = 'orange';
    }else {
        document.getElementById('progressbarGrade').style.backgroundColor = 'red';
    }

}

setGrades();