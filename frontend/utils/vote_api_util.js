export const questionUpVote = (questionId) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/upvote`,
        data: {question_id: questionId}
    })
}

export const questionDownVote = (questionId) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/downvote`,
        data: { question_id: questionId }
    })
}

export const answerUpVote = (questionId, answerId) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/answers/${answerId}/upvote`,
        data: { answer_id: answerId }
    })
}

export const answerDownVote = (questionId, answerId) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/questions/${questionId}/answers/${answerId}/downvote`,
        data: { answer_id: answerId }
    })
}