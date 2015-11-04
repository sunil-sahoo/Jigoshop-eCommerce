<?php
namespace Jigoshop\Admin\SystemInfo;

use Jigoshop\Admin\Settings\TabInterface;
use Jigoshop\Admin\SystemInfo;
use Jigoshop\Core;
use Jigoshop\Core\Options;
use WPAL\Wordpress;

class LogsTab implements TabInterface
{
	const SLUG = 'logs';

	/** @var \WPAL\Wordpress */
	private $wp;
	/** @var Options */
	private $options;

	public function __construct(Wordpress $wp, Options $options)
	{
		$this->wp = $wp;
		$this->options = $options;
	}

	/**
	 * @return string Title of the tab.
	 */
	public function getTitle()
	{
		return __('Logs', 'jigoshop');
	}

	/**
	 * @return string Tab slug.
	 */
	public function getSlug()
	{
		return self::SLUG;
	}

	/**
	 * @return array List of items to display.
	 */
	public function getSections()
	{
		return array(
			array(
				'title' => __('Available Logs', 'jigoshop'),
				'id' => 'available-logs',
				'fields' => array(
					array(
						'id' => 'logs',
						'name' => 'logs',
						'title' => __('Logs', 'jigoshop'),
						'classes' => array('plain-text'),
						'description' => __('If logs are empty, please make shure that log directory is writable.', 'jigoshop'),
						'type' => 'textarea',
						'disabled' => true,
						'value' => $this->getLogs('jigoshop')
					),
					array(
						'id' => 'debug-logs',
						'name' => 'debug-logs',
						'title' => __('Debug Logs', 'jigoshop'),
						'classes' => array('plain-text'),
						'description' => __('Debug logs requires WP_DEBUG set to true in wp-config.php.'),
						'disabled' => true,
						'type' => 'textarea',
						'value' => $this->getLogs('jigoshop.debug')
					),
				)
			)
		);
	}

	/**
	 * Validate and sanitize input values.
	 *
	 * @param array $settings Input fields.
	 *
	 * @return array Sanitized and validated output.
	 * @throws ValidationException When some items are not valid.
	 */
	public function validate($settings)
	{
		return $settings;
	}

	/**
	 * Gets contents from specified log file
	 *
	 * @param string $filename
	 *
	 * @return string
	 */
	private function getLogs($filename)
	{
		if (@fopen(JIGOSHOP_LOG_DIR.'/'.$filename.'.log', 'a')) {
			$logs = esc_textarea(file_get_contents(JIGOSHOP_LOG_DIR.'/'.$filename.'.log'));
			return empty($logs) ? __('Logs are empty.', 'jigoshop') : $logs;
		}

		return __('Log file does not exists.', 'jigoshop');
	}
}