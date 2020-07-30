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
            errors = {}
            message =''
       
            if params[:user][:email].length == 0 || params[:user][:password].length == 0
                if params[:user][:email].length == 0
                    message = 'Email cannot be empty.'
                    errors[:email] = message
                end
                if params[:user][:password].length == 0
                    message = 'Password cannot be empty.'
                    errors[:password] = message
                end
            else
                errors[:email] = 'The email or password is incorrect.'
            end
        
            render json: errors, status: 401
        end
    end

    def destroy
        render json: {}, status: 404 unless current_user   
        logout!
        render json: {}
       
    end


end