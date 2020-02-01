class Api::ListsController < ApplicationController
  def index
    @lists = List.all
    render :index
  end

  def create
    @list = List.new(list_params)
    @list.author_id = current_user.id
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 404
    end
  end

  def show
    @list = List.find_by(id: params[:id])
    render :show
  end

  def update
    @list = List.find_by(id: params[:list][:id])
    @list.title = params[:list][:title]

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 404
    end
  end

  def destroy
    @list = List.find_by(id: params[:id])

    if @list.destroy
      render :show
    else
      render json: { message: 'Could not be deleted' }, status: 404
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :board_id)
  end
end
