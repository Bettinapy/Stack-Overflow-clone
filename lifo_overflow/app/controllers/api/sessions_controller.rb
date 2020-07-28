class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "/api/users/show", status: 200
        else
            render json: ['The email or password is incorrect.'], status: 401
        end
    end

    def destroy
        render json: {}, status: 404 unless current_user   
        logout!
        render json: {}
       
    end


end