const { averageExams, isStudentPassExam } =require('../grade');
// unit test
// test('it should return exact avarage', ()=>{
//     const listValueExams = [80,100,70,100,70];
//     expect(averageExams(listValueExams)).toEqual(84);
// })

// test('it should handle non-number',()=>{
//     const listValueExams = [80,'100',70,100,70];
//     expect(()=> averageExams(listValueExams)).toThrow();
// })

//integration test

describe('grade calculate', ()=>{
    test('it should return exact avarage', ()=>{
        const listValueExams = [80,100,70,100,70];
        expect(averageExams(listValueExams)).toEqual(84);
    });

    //integrate testing
    test('it should return exam passed status',()=>{
        const listValueExams = [80,100,70,100,70];
        expect(isStudentPassExam(listValueExams, 'alfath')).toEqual(true);
    })

    test('it should return failed status',()=>{
        const listValueExams = [80,50,50,10,70];
        expect(isStudentPassExam(listValueExams,'rival')).toEqual(false);
    })

})