
json.questions do
    @questions.each do |question|
        json.set! question.id do
            json.partial! "question", question: question
            json.votes question.points
        end
    end
end

json.users do
    @questions.each do |question|
        json.set! question.author_id do
            json.partial! 'api/users/user', user: question.user
        end
    end
end