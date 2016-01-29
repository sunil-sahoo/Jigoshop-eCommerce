<?php

namespace Jigoshop\Admin\Reports\Chart\Widget;

use Jigoshop\Admin\Reports\Chart\WidgetInterface;
use Jigoshop\Helper\Product;
use Jigoshop\Helper\Render;

class TopEarners implements WidgetInterface
{
	const SLUG = 'top_earners';
	private $topEarners;

	public function __construct($topEarners)
	{
		$this->topEarners = $topEarners;
	}

	public function getSlug()
	{
		return self::SLUG;
	}

	public function getTitle()
	{
		return __('Top Earners', 'jigoshop');
	}

	public function getArgs()
	{
		$args = array();
		foreach($this->topEarners as $product){
			$args[] = array(
				'total' => Product::formatPrice($product->price),
				'id' => $product->id,
				'url' => esc_url(add_query_arg('product_ids', $product->id)),
				'title' => $product->title
			);
		}

		return $args;
	}

	public function display()
	{
		Render::output('admin/reports/widget/top_earners', array('args' => $this->getArgs()));
	}
}