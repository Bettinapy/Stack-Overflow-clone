json.user do
    json.partial! "./api/users/user", user: @user

end

json.questions do
    @user.questions.each do |question|
        json.set! question.id do
            json.partial! 'api/questions/question', question: question
        end
    end
end

json.answers do
    @user.answers.each do |answer|
        json.set! answer.id do 
            json.partial! 'api/answers/answer', answer: answer
        end
    end 
end