#### 5. Errors

```ruby
@users.errors:
attribute: :email, message: "is invalid", "can't be blank"
attribute: :display_name, message: "can't be blank"
attribute: :password, message: "is invalid"
```

##### 5.1 customize error messages in config/locales/en.yml

```ruby
en:
  hello: "Hello world"
  activerecord:
    attributes:
      user:
        display_name: "Display name"
        email: "Email"
        password: "Password"
    errors:
      models:
        user:
          attributes:
            display_name:
              blank: "cannot be empty"
            email:
              blank: "cannot be empty"
            password:
              blank: "cannot be empty"
```

##### 5.2 customize error messages in user.rb 

```ruby
# use Regex to define requirements
PASSWORD_REQUIREMENTS = /\A
        (?=.{8,}) # password length is >= 8
        (?=.*\d) # password has at least 1 number
        (?=.*[A-Za-z]) # password has at least 1 letter
    /x
    
    validates :email, :session_token, presence: true, uniqueness: true
		# validate email format with customized message
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'is not a valid email address.' }
    validates :display_name, :password_digest, presence: true
    validates :password, format: PASSWORD_REQUIREMENTS, allow_nil: true
```

##### 5.3 customize error messages in users_controller.rb

```ruby
def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            errors = {}
            # customize error messages by iterating through @user.errors
            @user.errors.each do |attribute, message|
                if message == "is not a valid email address."
                    message = params[:user][:email] + ' ' + message
                else  
                    message = User.human_attribute_name(attribute) + ' ' + message
                end
                errors[attribute] = message
            end
           # errors example:
           # {:email=>"test is not a valid email address.", 
           #  :display_name=>"Display name cannot be empty", 
           #  :password=>"Password is invalid"}
            render json: errors, status: 401
        end
    end
```



##### 5.4 render error messages in form

```ruby
render() {
        const displayNameError = (this.props.errors.display_name ? (
            <p className="error-msg">{this.props.errors.display_name}</p>
        ) : (<></>));

        const emailError = (this.props.errors.email ? (
            <p className="error-msg">{this.props.errors.email}</p>
        ) : (<></>));

        const passwordError = (this.props.errors.password ? (
            <p className="error-msg">{this.props.errors.password}</p>
        ) : (<></>));

        return (
            <div className="session-form">
                {header}
                <div>
                    {displayName}
                    {displayNameError}
                </div>
            </div >
        )
    }
```



##### 5.5 References

https://edgeguides.rubyonrails.org/active_record_validations.html#message

https://stackoverflow.com/questions/808547/fully-custom-validation-error-message-with-rails