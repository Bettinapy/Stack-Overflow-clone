json.question do
    json.partial! "./api/questions/question", question: @question
end

json.user do
    json.partial! '/api/users/user', user: @question.user
end