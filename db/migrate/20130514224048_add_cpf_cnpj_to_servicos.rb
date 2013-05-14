class AddCpfCnpjToServicos < ActiveRecord::Migration
  def change
    add_column :servicos, :cpf, :string
  end
end
