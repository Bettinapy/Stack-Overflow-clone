class Api::VotesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:upvote, :downvote]

    def upvote
        debugger
        update_vote(1)

    end

    def downvote
        debugger
        update_vote(-1)
       
    end

    private
    def update_vote(new_value)
        debugger
        if params[:question_id].present?
            @question = Question.includes(:user, :answers, :votes).find(params[:question_id])
            @vote = @question.votes.where(user_id: current_user.id).first 
            if @vote
                if @vote.value == new_value
                    @vote.destroy!
                else  
                    @vote.update_attribute(:value, new_value)
                end
            else
                @vote = current_user.votes.create({value: new_value, voteable: @question})
            end
            render '/api/questions/show'
        elsif params[:answer_id].present?
            @answer = Answer.find(params[:answer_id])
            @vote = @answer.votes.where(user_id: current_user.id).first
            if @vote
                if @vote.value == new_value
                    @vote.destroy!
                else  
                    @vote.update_attribute(:value, new_value)
                end
            else  
                @vote = current_user.votes.create({value: new_value, voteable: @answer})
            end
            render '/api/answers/show'
        end
    end
end