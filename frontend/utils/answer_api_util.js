export const fetchAnswers = (questionId) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `/api/questions/${questionId}/answers`,
        data: { answer: { question_id: questionId } }
    })
}

export const fetchAnswer = (questionId, answerId) => {

    return $.ajax({
        method: 'GET',
        url: `/api/questions/${questionId}/answers/${answerId}`,
        data: {answer:{question_id: questionId}}
    })
}
//answer here should contain questionId
export const createAnswer = (answer) => {
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${answer.questionId}/answers/`,
        data: { answer }
    })
}
export const updateAnswer = (answer) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/questions/${answer.questionId}/answers/${answer.id}`,
        data: { answer }
    })
}
export const deleteAnswer = (questionId, answerId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/questions/${questionId}/answers/${answerId}`,
    })
}
