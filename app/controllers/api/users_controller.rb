class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:show]

    def index
        @users = User.all 
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            errors = {}
            @user.errors.each do |attribute, message|
                if message == "is not a valid email address."
                    message = params[:user][:email] + ' ' + message
                else  
                    message = User.human_attribute_name(attribute) + ' ' + message
                end
                errors[attribute] = message
            end
            
            render json: errors, status: 401
        end
    end

    def show
        @user = User.includes(:answers, :questions).find(params[:id]) 
    end

    def user_params
        params.require(:user).permit(:display_name, :email, :password)
    end
end