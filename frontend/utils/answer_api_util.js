export const fetchAnswers = (questionId) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `/api/questions/${questionId}/answers`,
        data: { answer: { question_id: questionId } }
    })
}

export const fetchAnswer = (answerId) => {
    
    return $.ajax({
        method: 'GET',
        url: `/api/answers/${answerId}`
    })
}
//answer here should contain questionId
export const createAnswer = (answer) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${answer.question_id}/answers/`,
        data: { answer }
    })
}
export const updateAnswer = (answer) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/questions/${answer.question_id}/answers/${answer.id}`,
        data: { answer }
    })
}
export const deleteAnswer = (questionId, answerId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/questions/${questionId}/answers/${answerId}`,
    })
}
