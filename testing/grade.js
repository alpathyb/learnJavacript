
const averageExams = (valuesExam)=>{
    const numberValid = valuesExam.every(exam => typeof exam === 'number');
    if (!numberValid) throw Error('please input number');

    const sumValue = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumValue / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name)=>{
    const minValue = 70;
    const average = averageExams(valuesExam);

    if(average > minValue){
        console.log(`${name} pass the exams`);
        return true;
    }else{
        console
        .log(`${name} fail pass the exams`);
        return false;
    }
};

module.exports={averageExams, isStudentPassExam};