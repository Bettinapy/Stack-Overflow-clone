module Search
  def self.search(token)
    self.where("title like ?", "%#{token}%")
  end
end