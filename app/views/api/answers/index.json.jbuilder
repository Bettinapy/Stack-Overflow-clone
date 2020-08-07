json.answers do
    @answers.each do |answer|
        json.set! answer.id do
            json.partial! "answer", answer: answer
        end
    end
end

json.users do
    @answers.each do |answer|
        json.set! answer.author_id do
            json.partial! 'api/users/user', user: answer.user
        end
    end
end

json.question do
    json.set! @answers[0].question_id do
        json.partial! 'api/questions/question', question: @answers.first.question
    end
end