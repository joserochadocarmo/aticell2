# coding: utf-8
module ApplicationHelper
	def status
		[ 
          [ 'Aguardando', 'AGUARDANDO' ],
	        [ 'Concluido', 'CONCLUIDO' ],
	        [ 'Não Concluido', 'NAOCONCLUIDO' ]
	    ]
	end

	def tipos
    [
        [ 'Orçamento','ORCAMENTO' ],
        [ 'O.S.','OS' ],
        [ 'Recibo', 'RECIBO' ],
        [ 'Garantia','GARANTIA' ]
    ]
	end

	def format_date(date)
      return nil unless date
      date.strftime("%d/%m/%Y")
    end

    def format_time(time, include_date = true)
      return nil unless time      
      time.strftime("%d/%m/%Y %H:%M:%S")
    end
end
