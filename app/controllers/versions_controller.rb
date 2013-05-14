class VersionsController < ApplicationController
  def revert
    @version = Version.find(params[:id])
    if @version.reify
      @version.reify.save!
    else
      @version.item.destroy
    end
    link_name = params[:redo] == "true" ? t("active_admin.undo") : t("active_admin.redo")
    link = view_context.link_to(link_name, revert_version_path(@version.next, :redo => !params[:redo]), :method => :post)
    if params[:url].blank?
      redirect_to :back, :notice => (t("active_admin.undid.#{@version.event}") + "! #{link}").html_safe
    else
      redirect_to params[:url], :notice => (t("active_admin.undid.#{@version.event}") + "! #{link}").html_safe
    end
  end
end
