select region, count(id) as countries
from countries
group by region
order by count(id) desc;


