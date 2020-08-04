class Api::QuestionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:create, :destroy, :update]
    def index 
        @questions = Question.all.includes(:user)
    end

    def create 
        
        @question = current_user.questions.new(question_params)
        if @question.save 
            
            render :show
        else
            errors ={}
            @question.errors.each do |attribute, message|
                if !errors[attribute]
                    message = Question.human_attribute_name(attribute) + ' ' + message
                    errors[attribute] = message
                end
            end

            render json: errors, status: 401
        end
    end

    def show    
        @question = Question.includes(:user, :answers).find(params[:id])    
    end

    def update
       
        @question = Question.find(params[:id])
        if @question
            
            if @question.update(question_params)
                render :show
            else
                errors ={}
                @question.errors.each do |attribute, message|
                if !errors[attribute]
                    message = Question.human_attribute_name(attribute) + ' ' + message
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
        @question = Question.find(params[:id])
        @question.destroy!
        render json:{}
    end

    def question_params
        params.require(:question).permit(:title, :body)
    end
end
