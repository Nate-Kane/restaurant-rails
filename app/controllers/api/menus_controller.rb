class Api::MenusController < ApplicationController
  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.erros }, status: :unprocessable_entity
    end
  end

      ## this method actually just updates a boolean. I don't have a boolean for my menus, so I'll have to take a look at this
      ## later, to figure out how to update the name of the menu and whatnot.
  # def update
  #   menu = Menu.find(params[:id])
  #   menu.update(complete: !menu.complete)
  #   render json: menu
  # end

  def destroy
    Menu.find(params[:id]).destroy
    render json: { message: 'Menu deleted' }
  end

 private

  def menu_params
    params.require(:menu).permit(:name)
  end

end
