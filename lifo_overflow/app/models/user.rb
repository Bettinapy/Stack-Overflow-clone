class User < ApplicationRecord
    PASSWORD_REQUIREMENTS = /\A
        (?=.{8,})
        (?=.*\d)
        (?=.*[A-Za-z])
    /x 
    
    validates :email, :session_token, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'is not a valid email address.' }
    validates :display_name, :password_digest, presence: true
    validates :password, format: PASSWORD_REQUIREMENTS, allow_nil: true

    after_initialize :ensure_session_token

    has_many :questions
    
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)

        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
end
