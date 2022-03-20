const gradeDiv = document.querySelector('[data-actual-grade]')
const assignmentsWrapper = document.querySelector('[data-assignments-wrapper]')
const gradeHeader = document.querySelector('[data-actual-grade]') // the one we're changing

var totalPoints = 330;
var currentPoints = 130;


const assignments = [
    buildAssignment('Syllabus', '10/10', 'Assignments', '9/27'),
    buildAssignment('Summer Reading Quiz', '39/40', 'Assessments', '9/30'),
    buildAssignment('How the Middle East got that way', '20/20', 'Assignments', '10/3'),
    buildAssignment('Oil and Saudi Arabia Reading', '20/20', 'Assignments', '10/8'),
    buildAssignment('Mecca and Medina Quiz', '10/10', 'Assessments', '10')
]

function buildAssignment(name, score, category, date) {
    return {
        name: name,
        score: score,
        category: category,
        date: date
    }
}

updateCurrentPoints()

function updateCurrentPoints() {
    var importantAssignment = document.querySelector('[data-important-grade]')
    var typed = importantAssignment.value;

    console.log(typed);
    
    currentPoints = 130 + Number(typed);
    gradeHeader.innerHTML = `${toGrade(currentPoints / totalPoints * 100)} (${(currentPoints/totalPoints).toFixed(2)*100}%, ${currentPoints}/${totalPoints})`

}

function toGrade(cdaPercent) {
    if (cdaPercent >= 97) {
        return "A+"
    }

    else if (96.9 >= cdaPercent && cdaPercent >= 93) {
        return "A"
    }

    else if (92.9 >= cdaPercent && cdaPercent >= 90) {
        return "A-"
    }

    else if (89.9 >= cdaPercent && cdaPercent >= 87) {
        return "B+"
    }

    else if (86.9 >= cdaPercent && cdaPercent >= 83) {
        return "B"
    }

    else if (82.9 >= cdaPercent && cdaPercent >= 80) {
        return "B-"
    }

    else if (79.9 >= cdaPercent && cdaPercent >= 77) {
        return "C+"
    }

    else if (76.9 >= cdaPercent && cdaPercent >= 73) {
        return "C"
    }

    else if (72.9 >= cdaPercent && cdaPercent >= 70) {
        return "C-"
    }

    else if (69.9 >= cdaPercent && cdaPercent >= 67) {
        return "D+"
    }

    else if (66.6 >= cdaPercent && cdaPercent >= 63) {
        return "D"
    }

    else if (62.9 >= cdaPercent && cdaPercent >= 60) {
        return "D-"
    }

    else {
        return "F"
    }
}

/**
 * @deprecated - doesn't work
 */
function addAssignments() {
    if (supportsTemplate()) {
        const assignmentCard = document.querySelector('[data-assignment-card]')

        console.log(assignmentCard)
        var template = assignmentCard.content.cloneNode(true).children[0]

        let points = assignmentCard.querySelector('[data-user-grade-input]')
        let maxPoints = assignmentCard.querySelector('[data-grade-max-points]')
        let name = assignmentCard.querySelector('[data-assignment-name]')
        let category = assignmentCard.querySelector('[data-assignment-category]')
        let published = assignmentCard.querySelector('[data-assignment-date]')

        points.setAttribute('value', '7')
        maxPoints.textContent = '10'
        name.textContent = 'Syllabus'
        category.textContent = 'Assignments'
        published.textContent = '4/20'

        console.log(template);

        assignmentsWrapper.append(template)

    } else {
        alert('your browser is too old for this to work!')
    }
}