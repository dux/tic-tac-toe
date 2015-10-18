class MasterApi
  def initialize(params)
    @params = params
  end
end

class GameApi < MasterApi
  # def initialize(params)
  #   @params = params
  # end

  def save
    @params[:moves]
  end
end


g = GameApi.new({ moves:'xxxx' })

puts g.save