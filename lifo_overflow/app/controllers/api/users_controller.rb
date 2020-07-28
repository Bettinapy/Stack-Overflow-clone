class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @users = User.all 
    end

    def create
    
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def user_params
        params.require(:user).permit(:display_name, :email, :password)
    end
end