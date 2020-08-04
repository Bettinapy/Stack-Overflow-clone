class Api::AnswersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:create, :destroy, :update]
    def index
        @answers = Answer.all.includes(:user).select{|a| a.question_id = params[:answer][:question_id]}
    end
    
    def create         
        @answer = current_user.answers.new(answer_params)
        if @answer.save 
            
            render :show, include: [:question, :user]
        else
            errors ={}
            @answer.errors.each do |attribute, message|
                if !errors[attribute]
                    message = Answer.human_attribute_name(attribute) + ' ' + message
                    errors[attribute] = message
                end
            end

            render json: errors, status: 401
        end
    end

    def show
        
        @answer = Answer.find(params[:id])
        @user = @answer.user 
        
    end

    def update
       
        @answer = Answer.find(params[:id])
        if @answer
            
            if @answer.update(answer_params)
                render :show
            else
                errors ={}
                @answer.errors.each do |attribute, message|
                if !errors[attribute]
                    message = Answer.human_attribute_name(attribute) + ' ' + message
                    errors[attribute] = message
                end
            end
                render json: errors, status: 401  
            end
        else
            render json: ['not found'], status: 404
        end
    end

    def destroy
        @answer = Answer.find(params[:id])
        @answer.destroy!
        render json:{}
    end

    def answer_params
        params.require(:answer).permit(:body, :question_id)
    end
end
