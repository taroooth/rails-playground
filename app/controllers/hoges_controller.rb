class HogesController < ApplicationController
  def new
    @hoge = Hoge.new
  end

  def create
    @hoge = Hoge.new(hoge_params)
    if @hoge.save
      redirect_to '/'
    else
      render :new
    end
  end

  private

  def hoge_params
    params.require(:hoge).permit(:image)
  end
end
