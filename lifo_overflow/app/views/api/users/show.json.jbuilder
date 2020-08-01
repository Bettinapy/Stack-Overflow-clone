json.partial! "./api/users/user", user: @user

json.questions do
    @user.questions.each do |question|
        json.set! question.id do
            json.partial! 'api/questions/question', question: question
        end
    end
end