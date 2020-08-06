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