json.question do
    json.partial! "./api/questions/question", question: @question
end

json.answers do 
    @question.answers.each do |answer|
        json.set! answer.id do
            json.partial! 'api/answers/answer', answer: answer
        end
    end
end

json.users do
    json.set! @question.author_id do
        json.partial! '/api/users/user', user: @question.user
    end
    @question.answers.each do |answer|
        json.set! answer.author_id do
            json.partial! 'api/users/user', user: answer.user 
        end
    end
    @question.votes.each do |vote|
        json.set! vote.user_id do
            json.partial! 'api/users/user', user: vote.user
        end
    end
end
