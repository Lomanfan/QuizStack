class User < ApplicationRecord
  has_secure_password
  has_many :playlists
  #add validation
end
